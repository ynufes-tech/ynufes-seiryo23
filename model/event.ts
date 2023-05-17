import { Genre } from "~/model/genre";
import { Place } from "~/model/place";

export interface Event {
  id: number;
  event_name: string;
  event_description: string;
  event_genre: Genre;
  place_id: Place;
  place_name: string;
  org_name: string;
  org_description: string;
  org_twitter: string;
  org_instagram: string;
  org_facebook: string;
  org_homepage: string;
}
