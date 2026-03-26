"use client";

import { useState, useEffect, useCallback } from "react";

interface ContactRequest {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  telephone: string | null;
  evenement: string;
  date: string | null;
  invites: string | null;
  message: string;
  createdAt: string;
  read: boolean;
}

interface Stats {
  total: number;
  unread: number;
  thisMonth: number;
  byEventType: Record<string, number>;
  byMonth: { month: string; count: number }[];
}

interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
}

const EVENT_LABELS: Record<string, string> = {
  mariage: "Mariage",
  bapteme: "Baptême",
  "bar-mitzvah": "Bar-Mitzvah",
  "ceremonie-laique": "Cérémonie laïque",
  seminaire: "Séminaire",
  "fete-entreprise": "Fête d'entreprise",
  "evenement-prive": "Événement privé",
  autre: "Autre",
};

const INVITES_LABELS: Record<string, string> = {
  "moins-50": "Moins de 50",
  "50-100": "50 à 100",
  "100-200": "100 à 200",
  "200-300": "200 à 300",
  "300-500": "300 à 500",
  "plus-500": "Plus de 500",
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    totalPages: 1,
  });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const fetchData = useCallback(async (page = 1) => {
    try {
      const res = await fetch(`/api/admin/requests?page=${page}&limit=20`);
      if (res.status === 401) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setRequests(data.requests);
      setStats(data.stats);
      setPagination(data.pagination);
      setAuthenticated(true);
    } catch {
      setAuthenticated(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setAuthenticated(true);
        setLoading(true);
        fetchData();
      } else {
        setLoginError("Mot de passe incorrect");
      }
    } catch {
      setLoginError("Erreur de connexion");
    }
  };

  const toggleRead = async (id: number, currentRead: boolean) => {
    setActionLoading(id);
    try {
      await fetch(`/api/admin/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentRead }),
      });
      await fetchData(pagination.page);
    } catch {
      /* ignore */
    }
    setActionLoading(null);
  };

  const deleteRequest = async (id: number) => {
    if (!confirm("Supprimer cette demande ?")) return;
    setActionLoading(id);
    try {
      await fetch(`/api/admin/requests/${id}`, { method: "DELETE" });
      await fetchData(pagination.page);
    } catch {
      /* ignore */
    }
    setActionLoading(null);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Find most requested event type
  const topEvent = stats
    ? Object.entries(stats.byEventType).sort(([, a], [, b]) => b - a)[0]
    : null;

  const maxMonthCount = stats
    ? Math.max(...stats.byMonth.map((m) => m.count), 1)
    : 1;

  if (loading) {
    return (
      <>
        <meta name="robots" content="noindex" />
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#f8f6f3" }}>
          <div className="text-[#5a4a3a] text-lg">Chargement...</div>
        </div>
      </>
    );
  }

  if (!authenticated) {
    return (
      <>
        <meta name="robots" content="noindex" />
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: "#f8f6f3" }}
        >
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
            style={{ border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <h1
              className="text-2xl font-heading font-bold text-center mb-8"
              style={{ color: "#5a4a3a" }}
            >
              Administration
            </h1>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#5a4a3a" }}
              >
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "rgba(201,169,110,0.3)",
                  color: "#5a4a3a",
                }}
                autoFocus
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {loginError}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
              style={{ background: "#c9a96e" }}
            >
              Connexion
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      <div className="min-h-screen" style={{ background: "#f8f6f3" }}>
        {/* Header */}
        <header
          className="border-b px-6 py-4 flex items-center justify-between"
          style={{
            background: "white",
            borderColor: "rgba(201,169,110,0.15)",
          }}
        >
          <h1
            className="text-xl font-heading font-bold"
            style={{ color: "#5a4a3a" }}
          >
            Smart Moments — Admin
          </h1>
          <span className="text-sm" style={{ color: "#5a4a3a80" }}>
            {stats?.total ?? 0} demandes au total
          </span>
        </header>

        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total demandes"
              value={stats?.total ?? 0}
              icon="📋"
            />
            <StatCard
              label="Non lues"
              value={stats?.unread ?? 0}
              icon="📩"
              highlight={!!stats && stats.unread > 0}
            />
            <StatCard
              label="Ce mois-ci"
              value={stats?.thisMonth ?? 0}
              icon="📅"
            />
            <StatCard
              label="Type le plus demandé"
              value={
                topEvent
                  ? EVENT_LABELS[topEvent[0]] || topEvent[0]
                  : "—"
              }
              subtitle={topEvent ? `${topEvent[1]} demandes` : undefined}
              icon="⭐"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart - Requests per month */}
            <div
              className="bg-white rounded-xl p-6"
              style={{ border: "1px solid rgba(201,169,110,0.1)" }}
            >
              <h2
                className="font-heading font-semibold mb-4"
                style={{ color: "#5a4a3a" }}
              >
                Demandes par mois
              </h2>
              <div className="flex items-end gap-3 h-40">
                {stats?.byMonth.map((m) => (
                  <div
                    key={m.month}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span
                      className="text-xs font-medium"
                      style={{ color: "#5a4a3a" }}
                    >
                      {m.count}
                    </span>
                    <div
                      className="w-full rounded-t-md transition-all"
                      style={{
                        height: `${Math.max(
                          (m.count / maxMonthCount) * 120,
                          4
                        )}px`,
                        background:
                          "linear-gradient(to top, #c9a96e, #d4b97e)",
                      }}
                    />
                    <span
                      className="text-[10px] text-center leading-tight"
                      style={{ color: "#5a4a3a80" }}
                    >
                      {m.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event type distribution */}
            <div
              className="bg-white rounded-xl p-6"
              style={{ border: "1px solid rgba(201,169,110,0.1)" }}
            >
              <h2
                className="font-heading font-semibold mb-4"
                style={{ color: "#5a4a3a" }}
              >
                Répartition par type
              </h2>
              <div className="space-y-3">
                {stats &&
                  Object.entries(stats.byEventType)
                    .sort(([, a], [, b]) => b - a)
                    .map(([event, count]) => {
                      const pct =
                        stats.total > 0
                          ? Math.round((count / stats.total) * 100)
                          : 0;
                      return (
                        <div key={event}>
                          <div className="flex justify-between text-sm mb-1">
                            <span style={{ color: "#5a4a3a" }}>
                              {EVENT_LABELS[event] || event}
                            </span>
                            <span style={{ color: "#5a4a3a80" }}>
                              {count} ({pct}%)
                            </span>
                          </div>
                          <div
                            className="h-2 rounded-full overflow-hidden"
                            style={{ background: "rgba(201,169,110,0.1)" }}
                          >
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${pct}%`,
                                background: "#c9a96e",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                {stats &&
                  Object.keys(stats.byEventType).length === 0 && (
                    <p
                      className="text-sm text-center py-4"
                      style={{ color: "#5a4a3a80" }}
                    >
                      Aucune donnée
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* Table */}
          <div
            className="bg-white rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(201,169,110,0.1)" }}
          >
            <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
              <h2
                className="font-heading font-semibold"
                style={{ color: "#5a4a3a" }}
              >
                Toutes les demandes
              </h2>
            </div>

            {requests.length === 0 ? (
              <div className="px-6 py-12 text-center" style={{ color: "#5a4a3a80" }}>
                Aucune demande pour le moment
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className="text-left text-xs uppercase tracking-wider"
                      style={{
                        color: "#5a4a3a80",
                        borderBottom: "1px solid rgba(201,169,110,0.1)",
                      }}
                    >
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium">Nom</th>
                      <th className="px-6 py-3 font-medium">Email</th>
                      <th className="px-6 py-3 font-medium">Événement</th>
                      <th className="px-6 py-3 font-medium">Invités</th>
                      <th className="px-6 py-3 font-medium text-center">Lu</th>
                      <th className="px-6 py-3 font-medium text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <RequestRow
                        key={req.id}
                        req={req}
                        expanded={expandedId === req.id}
                        onToggle={() =>
                          setExpandedId(
                            expandedId === req.id ? null : req.id
                          )
                        }
                        onToggleRead={() => toggleRead(req.id, req.read)}
                        onDelete={() => deleteRequest(req.id)}
                        isLoading={actionLoading === req.id}
                        formatDate={formatDate}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div
                className="px-6 py-4 flex items-center justify-between border-t"
                style={{ borderColor: "rgba(201,169,110,0.1)" }}
              >
                <span className="text-sm" style={{ color: "#5a4a3a80" }}>
                  Page {pagination.page} sur {pagination.totalPages}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => fetchData(pagination.page - 1)}
                    disabled={pagination.page <= 1}
                    className="px-3 py-1 rounded text-sm border transition-colors disabled:opacity-40"
                    style={{
                      color: "#5a4a3a",
                      borderColor: "rgba(201,169,110,0.3)",
                    }}
                  >
                    Précédent
                  </button>
                  <button
                    onClick={() => fetchData(pagination.page + 1)}
                    disabled={pagination.page >= pagination.totalPages}
                    className="px-3 py-1 rounded text-sm border transition-colors disabled:opacity-40"
                    style={{
                      color: "#5a4a3a",
                      borderColor: "rgba(201,169,110,0.3)",
                    }}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({
  label,
  value,
  icon,
  subtitle,
  highlight,
}: {
  label: string;
  value: string | number;
  icon: string;
  subtitle?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="bg-white rounded-xl p-5"
      style={{
        border: highlight
          ? "1px solid #c9a96e"
          : "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#5a4a3a80" }}>
            {label}
          </p>
          <p
            className="text-2xl font-bold"
            style={{ color: highlight ? "#c9a96e" : "#5a4a3a" }}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-xs mt-1" style={{ color: "#5a4a3a80" }}>
              {subtitle}
            </p>
          )}
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
}

function RequestRow({
  req,
  expanded,
  onToggle,
  onToggleRead,
  onDelete,
  isLoading,
  formatDate,
}: {
  req: ContactRequest;
  expanded: boolean;
  onToggle: () => void;
  onToggleRead: () => void;
  onDelete: () => void;
  isLoading: boolean;
  formatDate: (d: string) => string;
}) {
  return (
    <>
      <tr
        onClick={onToggle}
        className="cursor-pointer transition-colors hover:bg-[#f8f6f3]/50"
        style={{
          borderBottom: expanded
            ? "none"
            : "1px solid rgba(201,169,110,0.06)",
          fontWeight: req.read ? "normal" : 600,
        }}
      >
        <td className="px-6 py-3 text-sm whitespace-nowrap" style={{ color: "#5a4a3a" }}>
          {formatDate(req.createdAt)}
        </td>
        <td className="px-6 py-3 text-sm" style={{ color: "#5a4a3a" }}>
          {req.prenom} {req.nom}
        </td>
        <td className="px-6 py-3 text-sm">
          <a
            href={`mailto:${req.email}`}
            onClick={(e) => e.stopPropagation()}
            style={{ color: "#c9a96e" }}
            className="hover:underline"
          >
            {req.email}
          </a>
        </td>
        <td className="px-6 py-3 text-sm" style={{ color: "#5a4a3a" }}>
          {EVENT_LABELS[req.evenement] || req.evenement}
        </td>
        <td className="px-6 py-3 text-sm" style={{ color: "#5a4a3a80" }}>
          {req.invites ? INVITES_LABELS[req.invites] || req.invites : "—"}
        </td>
        <td className="px-6 py-3 text-center">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{
              background: req.read ? "#c9a96e" : "#e5e5e5",
            }}
          />
        </td>
        <td className="px-6 py-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleRead();
              }}
              disabled={isLoading}
              className="text-xs px-2 py-1 rounded border transition-colors hover:bg-[#f8f6f3] disabled:opacity-50"
              style={{
                color: "#5a4a3a",
                borderColor: "rgba(201,169,110,0.3)",
              }}
              title={req.read ? "Marquer non lu" : "Marquer lu"}
            >
              {req.read ? "Non lu" : "Lu"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              disabled={isLoading}
              className="text-xs px-2 py-1 rounded border transition-colors hover:bg-red-50 hover:border-red-200 hover:text-red-600 disabled:opacity-50"
              style={{
                color: "#5a4a3a80",
                borderColor: "rgba(201,169,110,0.2)",
              }}
            >
              Supprimer
            </button>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.06)" }}>
          <td colSpan={7} className="px-6 py-4" style={{ background: "#faf9f7" }}>
            <div className="space-y-2 text-sm" style={{ color: "#5a4a3a" }}>
              {req.telephone && (
                <p>
                  <span className="font-medium">Téléphone :</span>{" "}
                  <a href={`tel:${req.telephone}`} style={{ color: "#c9a96e" }}>
                    {req.telephone}
                  </a>
                </p>
              )}
              {req.date && (
                <p>
                  <span className="font-medium">Date souhaitée :</span>{" "}
                  {new Date(req.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
              <div>
                <span className="font-medium">Message :</span>
                <p
                  className="mt-1 p-3 rounded-lg whitespace-pre-wrap"
                  style={{
                    background: "white",
                    border: "1px solid rgba(201,169,110,0.1)",
                    lineHeight: 1.6,
                  }}
                >
                  {req.message}
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
