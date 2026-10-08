import { onBeforeUnmount, unref, watch } from "vue";
import { useRoute } from "vue-router";

/**
 * Emits a FAQPage JSON-LD block for the questions rendered on the current page.
 *
 * The schema is kept in lockstep with the visible FAQ list: it is (re)written
 * whenever the items or the route change, and removed when the owning component
 * unmounts, so a page never advertises questions it does not show.
 *
 * @param {Array|Ref<Array>|Function} items  questions as { id?, question, answer }
 * @param {{ id?: string }} [options]        DOM id for the script element
 */
export function useFaqSchema(items, { id = "faq-page-schema" } = {}) {
  const route = useRoute();
  let script;

  const list = () => {
    const value = typeof items === "function" ? items() : unref(items);
    return (Array.isArray(value) ? value : []).filter(
      (item) => item && item.question && item.answer,
    );
  };

  const pageUrl = () => `${window.location.origin}${route.path}`;

  const remove = () => {
    if (script) {
      script.remove();
      script = undefined;
    }
  };

  const sync = () => {
    const questions = list();
    if (!questions.length) {
      remove();
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: pageUrl(),
      mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    };

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    // \u003c keeps an accidental "</" from closing the script element.
    script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
  };

  watch(
    () => JSON.stringify([route.path, list()]),
    sync,
    { immediate: true },
  );

  onBeforeUnmount(remove);
}
