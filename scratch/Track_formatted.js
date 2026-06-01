import { a4 as e, a9 as o, c as G, J as X } from "./index-CY0PCP32.js";
import { P as K } from "./PageBreadCrumb-vUSbHitb.js";
import {
  b as J,
  l as Y,
  c as q,
  u as Z,
  M as _,
  T as $,
  a as C,
  L as S,
} from "./TileLayer-DKfXRcFo.js";
const ee = ({
    searchQuery: t,
    onSearchChange: r,
    selectedVendor: s,
    onVendorChange: a,
    selectedSpv: d,
    onSpvChange: p,
    liveCount: l,
    sites: g,
    selectedSiteId: x,
    onSiteChange: h,
  }) =>
    e.jsx("div", {
      className:
        "rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]",
      children: e.jsx("div", {
        className: "px-6 py-4 border-b border-gray-100 dark:border-gray-800",
        children: e.jsxs("div", {
          className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4",
          children: [
            e.jsxs("div", {
              className: "flex-1 max-w-xl relative",
              children: [
                e.jsx("span", {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                  children: e.jsxs("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: [
                      e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                      e.jsx("line", {
                        x1: "21",
                        y1: "21",
                        x2: "16.65",
                        y2: "16.65",
                      }),
                    ],
                  }),
                }),
                e.jsx("input", {
                  type: "text",
                  placeholder: "Search by registration number…",
                  value: t,
                  onChange: (n) => r(n.target.value),
                  className:
                    "w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none transition-colors",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  htmlFor: "vendor-select",
                  className:
                    "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1",
                  children: "Vendor",
                }),
                e.jsxs("select", {
                  id: "vendor-select",
                  value: s,
                  onChange: (n) => a(n.target.value),
                  className:
                    "border border-gray-300 dark:border-gray-700 rounded-lg text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10 outline-none transition-colors cursor-pointer",
                  children: [
                    e.jsx("option", { value: "", children: "All Vendors" }),
                    e.jsx("option", {
                      value: "Intangles",
                      children: "Intangles",
                    }),
                    e.jsx("option", { value: "EKA", children: "EKA" }),
                    e.jsx("option", { value: "IPLT", children: "IPLT" }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  htmlFor: "spv-select",
                  className:
                    "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1",
                  children: "Fleet Group (SPV)",
                }),
                e.jsxs("select", {
                  id: "spv-select",
                  value: d,
                  onChange: (n) => p(n.target.value),
                  className:
                    "border border-gray-300 dark:border-gray-700 rounded-lg text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10 outline-none transition-colors cursor-pointer",
                  children: [
                    e.jsx("option", { value: "", children: "All SPVs" }),
                    e.jsx("option", { value: "MBMT", children: "MBMT" }),
                    e.jsx("option", { value: "Nagpur", children: "Nagpur" }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  htmlFor: "site-select",
                  className:
                    "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1",
                  children: "Site",
                }),
                e.jsxs("select", {
                  id: "site-select",
                  value: x,
                  onChange: h,
                  className:
                    "border border-gray-300 dark:border-gray-700 rounded-lg text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10 outline-none transition-colors cursor-pointer",
                  children: [
                    e.jsx("option", { value: "all", children: "All Sites" }),
                    g.map((n) =>
                      e.jsx(
                        "option",
                        { value: n.id.toString(), children: n.name },
                        n.id,
                      ),
                    ),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-center gap-2 bg-brand-500/10 dark:bg-brand-500/10 px-4 py-2 rounded-lg border border-brand-500/20 dark:border-brand-500/20 shrink-0",
              children: [
                e.jsx("div", {
                  className: "w-2 h-2 rounded-full bg-brand-500 animate-pulse",
                  "aria-hidden": "true",
                }),
                e.jsx("span", {
                  className:
                    "text-xl font-bold text-brand-600 dark:text-brand-400 leading-none",
                  children: l,
                }),
                e.jsx("span", {
                  className:
                    "text-xs font-medium text-brand-500/70 dark:text-brand-400/70 uppercase tracking-wide",
                  children: "Live Units",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  te = [
    { key: "total", label: "Total Vehicles", dotClass: "bg-brand-500" },
    { key: "moving", label: "Moving", dotClass: "bg-success-500" },
    { key: "idle", label: "Idle", dotClass: "bg-gray-400" },
    { key: "charging", label: "Charging", dotClass: "bg-warning-500" },
  ];
function re({ total: t, moving: r, idle: s, charging: a }) {
  const d = { total: t, moving: r, idle: s, charging: a };
  return e.jsx("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
    children: te.map(({ key: p, label: l, dotClass: g }) =>
      e.jsx(
        "div",
        {
          className:
            "rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]",
          children: e.jsxs("div", {
            className: "px-5 py-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [
                  e.jsx("span", {
                    className: `w-2 h-2 rounded-full flex-shrink-0 ${g}`,
                  }),
                  e.jsx("span", {
                    className:
                      "text-xs font-medium text-gray-500 dark:text-gray-400",
                    children: l,
                  }),
                ],
              }),
              e.jsx("span", {
                className:
                  "text-2xl font-bold text-gray-800 dark:text-white/90",
                children: d[p] ?? 0,
              }),
            ],
          }),
        },
        p,
      ),
    ),
  });
}
const se =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
  ae =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",
  L = J(
    function (r, s) {
      const a = new Y.Popup(r, s.overlayContainer);
      return q(a, s);
    },
    function (r, s, { position: a }, d) {
      o.useEffect(
        function () {
          const { instance: l } = r;
          function g(h) {
            h.popup === l && (l.update(), d(!0));
          }
          function x(h) {
            h.popup === l && d(!1);
          }
          return (
            s.map.on({ popupopen: g, popupclose: x }),
            s.overlayContainer == null
              ? (a != null && l.setLatLng(a), l.openOn(s.map))
              : s.overlayContainer.bindPopup(l),
            function () {
              var n;
              (s.map.off({ popupopen: g, popupclose: x }),
                (n = s.overlayContainer) == null || n.unbindPopup(),
                s.map.removeLayer(l));
            }
          );
        },
        [r, s, d, a],
      );
    },
  ),
  oe = (t) => ({
    total: t.length,
    moving: t.filter((r) => r.speed > 0).length,
    idle: t.filter((r) => r.speed === 0).length,
    charging: t.filter((r) => r.charging_status === 1).length,
  }),
  ne = (t) => (t ? new Date(t * 1e3).toLocaleString() : "N/A"),
  le = (t, r) =>
    t.filter((s) =>
      s.registration_number.toLowerCase().includes(r.toLowerCase()),
    ),
  ie = (t) =>
    [...t].sort((r, s) =>
      r.registration_number.localeCompare(s.registration_number),
    ),
  T = (t, r) =>
    t != null && r != null && !isNaN(t) && !isNaN(r) && t !== 0 && r !== 0,
  z = (t) =>
    t > 0
      ? "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500"
      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
function de({ isOpen: t, vehicles: r, onVehicleFocus: s }) {
  const a = ie(r);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: [
          "w-[320px] flex-shrink-0 border-r border-gray-100 dark:border-gray-800",
          "bg-white dark:bg-gray-900 flex flex-col overflow-hidden",
          t ? "hidden lg:flex" : "hidden",
        ].join(" "),
        children: e.jsx(M, { sorted: a, onVehicleFocus: s }),
      }),
      e.jsx("div", {
        className: [
          "absolute inset-y-0 left-0 w-full z-[1001]",
          "bg-white dark:bg-gray-900 flex flex-col overflow-hidden",
          t ? "flex lg:hidden" : "hidden",
        ].join(" "),
        children: e.jsx(M, { sorted: a, onVehicleFocus: s }),
      }),
    ],
  });
}
function M({ sorted: t, onVehicleFocus: r }) {
  return e.jsx("div", {
    className: "overflow-y-auto custom-scrollbar flex-1",
    children:
      t.length === 0
        ? e.jsx("div", {
            className: "flex items-center justify-center h-32",
            children: e.jsx("p", {
              className: "text-sm text-gray-400 dark:text-gray-500",
              children: "No vehicles found",
            }),
          })
        : t.map((s) =>
            e.jsx(ce, { vehicle: s, onVehicleFocus: r }, s.registration_number),
          ),
  });
}
function ce({ vehicle: t, onVehicleFocus: r }) {
  const s = T(t.latitude, t.longitude),
    a = z(t.speed);
  return e.jsxs("button", {
    type: "button",
    className: [
      "w-full flex items-center justify-between px-4 py-3",
      "border-b border-gray-100 dark:border-gray-800",
      "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
      s ? "" : "opacity-50 cursor-not-allowed",
    ].join(" "),
    onClick: s ? () => r(t) : void 0,
    disabled: !s,
    children: [
      e.jsxs("div", {
        className: "flex flex-col gap-0.5",
        children: [
          e.jsx("span", {
            className: "text-sm font-medium text-gray-800 dark:text-white/90",
            children: t.registration_number,
          }),
          e.jsx("span", {
            className: "text-xs text-gray-400",
            children: t.speed != null ? `${t.speed} km/h` : "N/A",
          }),
        ],
      }),
      e.jsx("span", {
        className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${a}`,
        children: t.speed > 0 ? "Moving" : "Idle",
      }),
    ],
  });
}
const xe = [
  { label: "OSM", key: "osm" },
  { label: "Roads", key: "google_roadmap" },
  { label: "Satellite", key: "google_satellite" },
  { label: "Hybrid", key: "google_hybrid" },
];
function ge({ activeLayer: t, onLayerChange: r }) {
  return e.jsx("div", {
    className:
      "absolute bottom-3 right-3 z-[1000] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-theme-sm p-1.5 flex gap-1",
    children: xe.map(({ label: s, key: a }) =>
      e.jsx(
        "button",
        {
          onClick: () => r(a),
          className:
            "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors " +
            (t === a
              ? "bg-brand-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"),
          children: s,
        },
        a,
      ),
    ),
  });
}
function ue({ vehicle: t }) {
  const r = document.documentElement.classList.contains("dark");
  return e.jsxs("div", {
    style: {
      minWidth: 200,
      padding: 12,
      backgroundColor: r ? "#1d2939" : "#ffffff",
      color: r ? "#f9fafb" : "#101828",
    },
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-2",
        children: [
          e.jsx("span", {
            className: "font-semibold text-gray-800",
            style: { color: "inherit" },
            children: t.registration_number,
          }),
          e.jsx("span", {
            className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${z(t.speed)}`,
            children: t.speed > 0 ? "Moving" : "Idle",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 gap-2",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs text-gray-500",
                style: { color: r ? "#98a2b3" : "#667085" },
                children: "Speed",
              }),
              e.jsx("p", {
                className: "text-sm font-medium text-gray-700",
                style: { color: "inherit" },
                children: t.speed != null ? `${t.speed} km/h` : "N/A",
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs text-gray-500",
                style: { color: r ? "#98a2b3" : "#667085" },
                children: "Charging",
              }),
              e.jsx("p", {
                className: "text-sm font-medium text-gray-700",
                style: { color: "inherit" },
                children:
                  t.charging_status != null
                    ? t.charging_status === 1
                      ? "Charging"
                      : "Not Charging"
                    : "N/A",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "col-span-2",
            children: [
              e.jsx("p", {
                className: "text-xs text-gray-500",
                style: { color: r ? "#98a2b3" : "#667085" },
                children: "Last Update",
              }),
              e.jsx("p", {
                className: "text-sm font-medium text-gray-700",
                style: { color: "inherit" },
                children: ne(t.gps_time),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function pe({ site: t }) {
  const r = document.documentElement.classList.contains("dark");
  return e.jsxs("div", {
    style: {
      minWidth: 180,
      padding: 12,
      backgroundColor: r ? "#1d2939" : "#ffffff",
      color: r ? "#f9fafb" : "#101828",
    },
    children: [
      e.jsx("p", {
        className: "font-semibold text-gray-800",
        style: { color: "inherit" },
        children: t.name,
      }),
      e.jsx("p", {
        className: "text-sm text-gray-500 mt-0.5",
        style: { color: r ? "#98a2b3" : "#667085" },
        children: t.address || "No address provided",
      }),
      e.jsxs("div", {
        className: "mt-2 flex flex-col gap-0.5",
        children: [
          e.jsxs("span", {
            className: "text-xs text-gray-400 uppercase font-medium",
            style: { color: r ? "#667085" : "#98a2b3" },
            children: ["Site ID: ", t.id],
          }),
          e.jsxs("span", {
            className: "text-xs text-gray-400 uppercase font-medium",
            style: { color: r ? "#667085" : "#98a2b3" },
            children: ["Type: ", t.site_type_name || "N/A"],
          }),
        ],
      }),
    ],
  });
}
const he = ({ center: t, zoom: r }) => {
    const s = Z();
    return (
      o.useEffect(() => {
        s.setView(t, r);
      }, [t, r, s]),
      null
    );
  },
  me = S.icon({
    iconUrl: se,
    shadowUrl: ae,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
S.Marker.prototype.options.icon = me;
const be = S.divIcon({
  className: "vehicle-marker",
  html: `<div style="
    background-color: #3b82f6;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <div style="width: 4px; height: 4px; background-color: white; border-radius: 50%;"></div>
  </div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});
function fe({
  isLoading: t,
  filteredSites: r,
  filteredVehicles: s,
  vehicleError: a,
  mapCenter: d,
  zoom: p,
  mapLayer: l,
  layers: g,
  isSidebarOpen: x,
  onToggleSidebar: h,
  onVehicleFocus: n,
  onLayerChange: w,
  mapRef: j,
}) {
  const y = g[l];
  return e.jsxs("div", {
    className:
      "rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden",
    children: [
      e.jsxs("div", {
        className:
          "px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("h3", {
                className:
                  "text-sm font-semibold text-gray-800 dark:text-white/90",
                children: "Live Map",
              }),
              a !== null &&
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 px-3 py-1.5 bg-error-50 dark:bg-error-500/10 text-xs text-error-600 dark:text-error-400 rounded-lg",
                  children: [
                    e.jsxs("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      children: [
                        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                        e.jsx("line", {
                          x1: "12",
                          y1: "8",
                          x2: "12",
                          y2: "12",
                        }),
                        e.jsx("line", {
                          x1: "12",
                          y1: "16",
                          x2: "12.01",
                          y2: "16",
                        }),
                      ],
                    }),
                    "Vehicle data may be stale — last update failed",
                  ],
                }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: h,
            className:
              "flex items-center justify-center w-8 h-8 rounded-lg text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors",
            "aria-label": x ? "Close vehicle sidebar" : "Open vehicle sidebar",
            children: x
              ? e.jsx("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: e.jsx("polyline", { points: "15 18 9 12 15 6" }),
                })
              : e.jsxs("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    e.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
                    e.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
                    e.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
                    e.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
                    e.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
                    e.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" }),
                  ],
                }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex",
        style: { height: "calc(100vh - 280px)" },
        children: [
          e.jsx(de, { isOpen: x, vehicles: s, onVehicleFocus: n }),
          e.jsxs("div", {
            className: "relative flex-1",
            children: [
              e.jsxs(_, {
                center: d,
                zoom: p,
                scrollWheelZoom: !0,
                className: "h-full w-full",
                ref: j,
                children: [
                  y &&
                    e.jsx(
                      $,
                      {
                        attribution: y.attribution,
                        url: y.url,
                        subdomains: y.subdomains,
                      },
                      l,
                    ),
                  r.map((i) =>
                    e.jsx(
                      C,
                      {
                        position: [i.latitude, i.longitude],
                        children: e.jsx(L, {
                          children: e.jsx(pe, { site: i }),
                        }),
                      },
                      i.id,
                    ),
                  ),
                  s
                    .filter((i) => T(i.latitude, i.longitude))
                    .map((i) =>
                      e.jsx(
                        C,
                        {
                          position: [i.latitude, i.longitude],
                          icon: be,
                          children: e.jsx(L, {
                            children: e.jsx(ue, { vehicle: i }),
                          }),
                        },
                        i.registration_number,
                      ),
                    ),
                  e.jsx(he, { center: d, zoom: p }),
                ],
              }),
              e.jsx(ge, { activeLayer: l, onLayerChange: w }),
              t &&
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-[1001] flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50",
                  children: e.jsx(G, { size: "lg" }),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
const ye = {
    osm: {
      name: "OpenStreetMap",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: ["a", "b", "c"],
    },
    google_roadmap: {
      name: "Google Roadmap",
      url: "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      attribution: "&copy; Google Maps",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    },
    google_satellite: {
      name: "Google Satellite",
      url: "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      attribution: "&copy; Google Maps",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    },
    google_hybrid: {
      name: "Google Hybrid",
      url: "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      attribution: "&copy; Google Maps",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    },
  },
  Ne = () => {
    const [t, r] = o.useState([]),
      [s, a] = o.useState([]),
      [d, p] = o.useState([]),
      [l, g] = o.useState(null),
      [x, h] = o.useState(""),
      [n, w] = o.useState(""),
      [j, y] = o.useState(""),
      [i, E] = o.useState("all"),
      [I, k] = o.useState([20.5937, 78.9629]),
      [B, v] = o.useState(5),
      [O, R] = o.useState("google_roadmap"),
      [U, H] = o.useState(!1),
      [P, A] = o.useState(!0),
      D = o.useRef(null),
      N = o.useMemo(() => le(d, j), [d, j]),
      F = o.useMemo(() => oe(N), [N]);
    (o.useEffect(() => {
      (async () => {
        try {
          A(!0);
          const c = await X(),
            m = ((c == null ? void 0 : c.data) || c || []).filter(
              (f) => f.latitude && f.longitude,
            );
          (r(m), a(m), k([20.5937, 78.9629]), v(5));
        } catch (c) {
          console.error("Error fetching sites:", c);
        } finally {
          A(!1);
        }
      })();
    }, []),
      o.useEffect(() => {
        let u = !1;
        const c = async () => {
          try {
            const m = await fetch(
              `https://twins.transvolt.org/latest_points?limit=1&vendor=${x}&spv=${n}`,
              {
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0cmFuc3ZvbHRfaXQiLCJleHAiOjE4MTA2NTgwNDZ9.5qOiCCey50LJoblcTIrAD-lcvi4Kd4FX29Q2D1YongY",
                },
              },
            );
            if (!m.ok) throw new Error(`HTTP ${m.status}`);
            const f = await m.json();
            u ||
              (f != null &&
                f.vehicles &&
                p(Object.values(f.vehicles).map((Q) => Q[0])),
              g(null));
          } catch (m) {
            u || g(m.message || "Fetch failed");
          }
        };
        c();
        const b = setInterval(c, 3e4);
        return () => {
          ((u = !0), clearInterval(b));
        };
      }, [x, n]));
    const V = (u) => {
        const c = u.target.value;
        if ((E(c), c === "all")) (a(t), k([20.5937, 78.9629]), v(5));
        else {
          const b = t.find((m) => m.id.toString() === c);
          b && (a([b]), k([b.latitude, b.longitude]), v(15));
        }
      },
      W = (u) => {
        (k([u.latitude, u.longitude]), v(15));
      };
    return e.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [
        e.jsx(K, { pageTitle: "Track" }),
        e.jsx(ee, {
          searchQuery: j,
          onSearchChange: y,
          selectedVendor: x,
          onVendorChange: h,
          selectedSpv: n,
          onSpvChange: w,
          liveCount: N.length,
          sites: t,
          selectedSiteId: i,
          onSiteChange: V,
        }),
        e.jsx(re, { ...F }),
        e.jsx(fe, {
          isLoading: P,
          filteredSites: s,
          filteredVehicles: N,
          vehicleError: l,
          mapCenter: I,
          zoom: B,
          mapLayer: O,
          layers: ye,
          isSidebarOpen: U,
          onToggleSidebar: () => H((u) => !u),
          onVehicleFocus: W,
          onLayerChange: R,
          mapRef: D,
        }),
      ],
    });
  };
export { Ne as default };
