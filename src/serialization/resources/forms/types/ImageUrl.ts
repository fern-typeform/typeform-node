/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const ImageUrl: core.serialization.ObjectSchema<serializers.forms.ImageUrl.Raw, Typeform.forms.ImageUrl> =
    core.serialization.object({
        href: core.serialization.string().optional(),
    });

export declare namespace ImageUrl {
    interface Raw {
        href?: string | null;
    }
}