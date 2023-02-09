/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const Language: core.serialization.Schema<serializers.forms.Language.Raw, Typeform.forms.Language> =
    core.serialization.enum_([
        "en",
        "es",
        "ca",
        "fr",
        "de",
        "ru",
        "it",
        "da",
        "pt",
        "ch",
        "zh",
        "nl",
        "no",
        "uk",
        "ja",
        "ko",
        "hr",
        "fi",
        "sv",
        "pl",
        "el",
        "hu",
        "tr",
        "cs",
        "et",
        "di",
    ]);

export declare namespace Language {
    type Raw =
        | "en"
        | "es"
        | "ca"
        | "fr"
        | "de"
        | "ru"
        | "it"
        | "da"
        | "pt"
        | "ch"
        | "zh"
        | "nl"
        | "no"
        | "uk"
        | "ja"
        | "ko"
        | "hr"
        | "fi"
        | "sv"
        | "pl"
        | "el"
        | "hu"
        | "tr"
        | "cs"
        | "et"
        | "di";
}
