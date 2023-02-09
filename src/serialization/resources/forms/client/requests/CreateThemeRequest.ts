/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../../core";

export const CreateThemeRequest: core.serialization.Schema<
    serializers.forms.CreateThemeRequest.Raw,
    Typeform.forms.CreateThemeRequest
> = core.serialization.object({
    title: core.serialization.string(),
    settings: core.serialization.lazyObject(async () => (await import("../../../..")).forms.FormSettings).optional(),
    theme: core.serialization.string().optional(),
    workspace: core.serialization.lazyObject(async () => (await import("../../../..")).forms.WorkspaceUrl),
    hidden: core.serialization.list(core.serialization.string()).optional(),
    variables: core.serialization.lazyObject(async () => (await import("../../../..")).forms.FormVariables).optional(),
    welcomeScreens: core.serialization.property(
        "welcome_screens",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../..")).forms.WelcomeScreen))
            .optional()
    ),
    thankyouScreens: core.serialization.property(
        "thankyou_screens",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../..")).forms.ThankYouScreen))
            .optional()
    ),
    fields: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../..")).forms.FormField))
        .optional(),
});

export declare namespace CreateThemeRequest {
    interface Raw {
        title: string;
        settings?: serializers.forms.FormSettings.Raw | null;
        theme?: string | null;
        workspace: serializers.forms.WorkspaceUrl.Raw;
        hidden?: string[] | null;
        variables?: serializers.forms.FormVariables.Raw | null;
        welcome_screens?: serializers.forms.WelcomeScreen.Raw[] | null;
        thankyou_screens?: serializers.forms.ThankYouScreen.Raw[] | null;
        fields?: serializers.forms.FormField.Raw[] | null;
    }
}
