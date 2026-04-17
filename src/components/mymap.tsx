import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import {  ExternalLink, Calendar } from "lucide-react";


const places = [
  {
    id: 1,
    name: "NOMBRE DE LA OBRA",
    label: "CATEGORIA - SIN INICIAR/EN CURSO/FINALIZADA",
    category: "TIPO DE OBRA",
    date: "15/04/2023",
    image:
      "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=300&h=200&fit=crop",
    lng: -62.085126,
    lat: -38.859158,
  },
  {
    id: 2,
    name: "NOMBRE DE LA OBRA",
    label: "CATEGORIA - SIN INICIAR/EN CURSO/FINALIZADA",
    category: "TIPO DE OBRA",
    date: "15/04/2023",
    image:
      "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=300&h=200&fit=crop",
    lng: -62.067960,
    lat: -38.869450,
  },
  {
    id: 3,
    name: "NOMBRE DE LA OBRA",
    label: "CATEGORIA - SIN INICIAR/EN CURSO/FINALIZADA",
    category: "TIPO DE OBRA",
    date: "15/04/2023",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=300&h=200&fit=crop",
    lng: -62.059033,
    lat: -38.887224,
  },
];

export function MyMap() {
  return (
    <div className="h-full w-full">
      <Map center={[-62.0807269, -38.875456]} zoom={13}>
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-rose-500 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <MarkerLabel position="bottom">{place.label}</MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="p-0 w-62">
              <div className="relative h-32 overflow-hidden rounded-t-md">
                <img
                  src={place.image}
                  alt={place.name}
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {place.category}
                  </span>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {place.name}
                  </h3>
                </div>
                <div>
                  <span>{place.label}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="size-3.5" />
                  <span>Inicio: {place.date}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex bg-slate-800 text-white w-full items-center justify-center h-8 px-3 text-sm border rounded-md"
                  >
                    <ExternalLink className="size-3.5 mr-1.5" />
                    Ver Info
                  </a>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}