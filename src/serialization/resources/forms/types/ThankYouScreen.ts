/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const ThankYouScreen: core.serialization.ObjectSchema<
    serializers.forms.ThankYouScreen.Raw,
    Typeform.forms.ThankYouScreen
> = core.serialization.object({
    ref: core.serialization.string().optional(),
    title: core.serialization.string(),
});

export declare namespace ThankYouScreen {
    interface Raw {
        ref?: string | null;
        title: string;
    }
}
