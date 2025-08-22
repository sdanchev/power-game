import React from 'react';

export default function UtilitarianismCompared({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Comparison with utilitarianism – happiness vs power</h1>
    <p>The power principle is a slight revision of the{" "}
  <a
    href="https://onlinelibrary.wiley.com/doi/abs/10.1002/9781444367072.wbiee762"
    target="_blank"
    rel="noopener noreferrer"
  >
    Utility or Greatest Happiness Principle
  </a>  
      , underpinning the theory of utilitarianism. The greatest happiness principle was stipulated by Jeremy Bentham in the second half of the 18th century. It was very influential for the subsequent development of ethics, political philosophy, and economics.</p>
    <div className="image-container no-wrap-image">
      <img src="/assets/Jeremy-Bentham.png" alt="Jeremy-Bentham" />
      <div className="image-caption">
        it is the greatest happiness of the greatest number that is the measure of right and wrong<sup>1</sup>
      </div>
    </div>
    <p>The main difference is that the utility principle is rephrased here in terms of power rather than happiness. By shifting the definition from happiness to power, we shift the emphasis from achieving happiness (which hits various problems linked to heterogeneity and subjectivity of human experience), to securing the conditions for individuals to pursue happiness (if they wish to).</p>
    <p>Under the revision proposed here, when comparing two social outcomes, the better outcome is the one that achieves <highlight>“greater power to the greatest number”.</highlight></p>
    <p>Bentham’s formulation of the greatest happiness principle has sowed confusion and ridicule among political philosophers and economists. The most common interpretation of the principle is to forget about the “greatest number” part and think about this principle as caring only about the sum total of individual happiness.</p>
    <p>Alternative interpretations have tried to express the principle in terms of maximising average happiness. This interpretation considers also how happiness is distributed within society, preferring more equal outcomes that have the same sum total of happiness. It is substantiated by the attempt to make “of the greatest number” part of the principle operational.</p>
    <p>As many paradoxes in the utilitarian literature have shown, the distribution of happiness is not easy to make operational as a guiding principle for social engineering. Happiness depends on heterogenous factors. I may be living in a dump and feel extremely elevated, or I may be a miserable billionaire, constantly on the verge of taking my life by smashing my superyacht on the nearest cliff.</p>
    <p>The distribution of power, rather than happiness, is much better suited to guide the measure of social progress. <highlight>Focusing on the distribution of capabilities to achieve outcomes, rather than how the outcomes make a heterogenous population feel, provides a more solid and objective basis for social policy.</highlight></p>
    <footnote> <sup>1</sup> Bentham, J. (1907). An introduction to the principles of morals and legislation (Ch. I, Sect. I). (J. H. Burns & H. L. A. Hart, Eds., Original work published 1789). Oxford: Clarendon Press.</footnote>
    <button onClick={() => setScene("Formula")}>Next</button>
    <button onClick={() => setScene("PowerDefinition")}>Back</button>
    <button onClick={() => setScene("PowerPrinciple")}>Way back</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
