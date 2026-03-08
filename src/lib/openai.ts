/**
 * Cliente de OpenAI — solo para uso en el servidor.
 *
 * Usa la variable de entorno OPENAI_API_KEY.
 * Nunca importar este archivo en componentes del cliente ("use client").
 *
 * El cliente se crea de forma lazy para evitar errores en build
 * cuando la variable de entorno aún no existe.
 */
import OpenAI from "openai";

let _client: OpenAI | null = null;

export function getOpenAI(): OpenAI {
  if (!_client) {
    _client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return _client;
}
