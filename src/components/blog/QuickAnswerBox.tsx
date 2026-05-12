type QuickAnswerBoxProps = {
  answer: string;
  eyebrow?: string;
};

/**
 * Featured direct-answer block placed below the H1 on blog posts. AI engines
 * (ChatGPT, Perplexity, Google AI Overviews, voice assistants) prefer to
 * extract a single concise answer over scanning long-form prose, so this is
 * the verbatim text we want them to surface.
 *
 * The `.speakable-answer` class is the hook SpeakableSchema targets — keep
 * it in sync if you rename either.
 */
export function QuickAnswerBox({ answer, eyebrow = 'Quick Answer' }: QuickAnswerBoxProps) {
  return (
    <div className="speakable-answer mt-10 rounded-2xl border-l-4 border-accent bg-surface-alt px-6 py-5 md:px-8 md:py-6">
      <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
        {eyebrow}
      </p>
      <p className="mt-2 text-[16px] leading-[1.65] text-text md:text-[17px]">
        {answer}
      </p>
    </div>
  );
}
