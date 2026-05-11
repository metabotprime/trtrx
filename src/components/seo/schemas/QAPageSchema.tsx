type QAPair = {
  question: string;
  answer: string;
};

type QAPageSchemaProps = {
  questions: QAPair[];
  mainEntityName?: string;
};

/**
 * QAPage with array of Question/acceptedAnswer entries. Suitable for blog posts
 * built around a single question + Q&A appendix, or any page where the primary
 * content shape is question-and-answer (vs an FAQ alongside other content,
 * which should use FAQSchema).
 */
export function QAPageSchema({ questions, mainEntityName }: QAPageSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    ...(mainEntityName ? { name: mainEntityName } : {}),
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
