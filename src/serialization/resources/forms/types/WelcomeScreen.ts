/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const WelcomeScreen: core.serialization.ObjectSchema<
    serializers.forms.WelcomeScreen.Raw,
    Typeform.forms.WelcomeScreen
> = core.serialization.object({
    ref: core.serialization.string().optional(),
    title: core.serialization.string(),
});

export declare namespace WelcomeScreen {
    interface Raw {
        ref?: string | null;
        title: string;
    }
}
