// =========================
// MAP MODULE PRO+
// =========================

let map = null;

export function initMap() {
    try {
        const container = document.getElementById("map");

        if (!container) {
            throw new Error("Map container #map introuvable dans le DOM.");
        }
        import { initSonometers } from "./sonometers.js";
        import { createStaticHeatmap } from "./sonometers.js";

        export function initMap() {
        const map = L.map("map").setView([50.64, 5.44], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

        initSonometers(map);
        createStaticHeatmap(map); // heatmap prête mais pas affichée

        return map;
        }

        // Empêche Leaflet de réinitialiser une carte existante
        if (map !== null) {
            console.warn("[MAP] initMap() ignoré : carte déjà initialisée.");
            return map;
        }

        // Initialisation
        map = L.map("map", {
            zoomControl: true,
            preferCanvas: true
        }).setView([50.637, 5.443], 13);

        // Fond de carte
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap"
        }).addTo(map);

        console.log("[MAP] Carte initialisée avec succès.");
        return map;

    } catch (err) {
        console.error("[MAP ERROR] Erreur initMap :", err);
        return null;
    }
}

export function getMap() {
    return map;
}
