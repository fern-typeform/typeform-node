/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const Font: core.serialization.Schema<serializers.Font.Raw, Typeform.Font> = core.serialization.enum_([
    "Acme",
    "Arial",
    "Arvo",
    "Bangers",
    "Cabin",
    "Courier",
    "Exo",
    "Georgia",
    "Handlee",
    "Karla",
    "Lato",
    "Lekton",
    "Lobster",
    "Lora",
    "McLaren",
    "Montserrat",
    "Oswald",
    "Quicksand",
    "Raleway",
    "Signika",
    "Sniglet",
    "Vollkorn",
]);

export declare namespace Font {
    type Raw =
        | "Acme"
        | "Arial"
        | "Arvo"
        | "Bangers"
        | "Cabin"
        | "Courier"
        | "Exo"
        | "Georgia"
        | "Handlee"
        | "Karla"
        | "Lato"
        | "Lekton"
        | "Lobster"
        | "Lora"
        | "McLaren"
        | "Montserrat"
        | "Oswald"
        | "Quicksand"
        | "Raleway"
        | "Signika"
        | "Sniglet"
        | "Vollkorn";
}