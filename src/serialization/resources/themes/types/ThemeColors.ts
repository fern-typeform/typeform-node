/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const ThemeColors: core.serialization.ObjectSchema<serializers.ThemeColors.Raw, Typeform.ThemeColors> =
    core.serialization.object({
        answer: core.serialization.string(),
        background: core.serialization.string(),
        button: core.serialization.string(),
        question: core.serialization.string(),
    });

export declare namespace ThemeColors {
    interface Raw {
        answer: string;
        background: string;
        button: string;
        question: string;
    }
}
