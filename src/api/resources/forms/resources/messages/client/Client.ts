/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.TypeformEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Retrieves the customizable messages for a form (specified by `form_id`) using the form's  specified language. You can format messages with bold (`*bold*`) and italic (`_italic_`) text. HTML tags are forbidden.
     */
    public async get(formId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.TypeformEnvironment.Production,
                `/forms/${formId}/messages`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.TypeformError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TypeformError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TypeformTimeoutError();
            case "unknown":
                throw new errors.TypeformError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
