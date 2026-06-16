import { whatsappLink } from "../data/site.ts";

/**
 * Formulário de contato para um site estático (sem back-end):
 * valida os campos e abre o WhatsApp com a mensagem já montada.
 * É a forma mais confiável de gerar contato sem servidor.
 */
export function initForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Usa a validação nativa do HTML5.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const instrument = String(data.get("instrument") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      `Olá! Meu nome é ${name}.`,
      `Instrumento: ${instrument}.`,
      message ? `Mensagem: ${message}` : "Gostaria de agendar um setup.",
    ];

    window.open(whatsappLink(lines.join(" ")), "_blank", "noopener");
    showToast();
    form.reset();
  });
}

/** Mostra um toast de confirmação por alguns segundos. */
function showToast(): void {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.classList.remove("hidden");
  window.setTimeout(() => toast.classList.add("hidden"), 4000);
}
