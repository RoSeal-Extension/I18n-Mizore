export { parse as parseJSONC } from "https://deno.land/std@0.201.0/jsonc/mod.ts";
export { type MessageFormatElement } from "https://esm.sh/v131/@formatjs/icu-messageformat-parser@2.6.0";
export { default as I18n } from "https://esm.sh/v131/intl-messageformat@10.5.0";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
