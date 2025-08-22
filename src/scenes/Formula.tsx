import React from 'react';
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";


export default function Formula({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Mathematical formulation</h1>
    <p>If the “greatest power principle” has to be expressed in mathematical terms, as a social welfare function, it could take the following form (with ChatGPT's help):</p>
    
    <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
          padding: "12px",
          maxWidth: "700px",
          fontFamily: "Georgia, serif",
          lineHeight: 1.5,
        }}
      >
        <p>
          Let there be <InlineMath math="n" /> individuals{" "}
          <InlineMath math="i = 1, \dots, n" />. Individual power is
        </p>

        <BlockMath math="p_i = p_i(x_i, y, \varepsilon_i), \quad p_i>0," />

        <p>
          where <InlineMath math="x_i" /> is a vector of individual endowments
          and traits, <InlineMath math="y" /> is a vector of policy instruments
          under the control of a "social planner", and{" "}
          <InlineMath math="\varepsilon_i" /> is an idiosyncratic shock.
        </p>

        <p>Social welfare is the product of individual powers:</p>

        <BlockMath math="W(y) = \prod_{i=1}^n p_i(x_i, y, \varepsilon_i)" />

        <p>
          The planner chooses policies <InlineMath math="y" /> to maximise
          welfare subject to a feasibility constraint (for example, a budget
          constraint <InlineMath math="B(y) \le B_0" />):
        </p>

        <BlockMath math="\max_{y} \ \prod_{i=1}^n p_i(x_i, y, \varepsilon_i) \quad\text{s.t.}\quad B(y)\le B_0" />

        <p>
          <strong>Variable definitions:</strong>
          <br />
          <InlineMath math="p_i" />: individual power (positive scalar). <br />
          <InlineMath math="x_i" />: individual characteristics (income,
          wealth, skills, knowledge, charisma, etc.). <br />
          <InlineMath math="y" />: policy variables (taxes, transfers,
          regulations, public goods, etc.). <br />
          <InlineMath math="\varepsilon_i" />: idiosyncratic shock affecting{" "}
          <InlineMath math="i" />’s power. <br />
          <InlineMath math="B(y)" />: resource cost of policies{" "}
          <InlineMath math="y" />; <InlineMath math="B_0" /> available
          resources.
        </p>

        <p>
          <strong>Assumptions:</strong>
          <br />
          <InlineMath math="p_i>0" /> for all <InlineMath math="i" />;{" "}
          <InlineMath math="p_i" /> differentiable in{" "}
          <InlineMath math="y" />. <br />
          The planner cares only about the product of powers (no weights).{" "}
          <br />
          If <InlineMath math="\varepsilon_i" /> is stochastic, ex-ante
          objectives use <InlineMath math="E[\prod_i p_i]" />.
        </p>
      </div>
    
    <p>This social welfare function resembles the so called{" "}
  <a
    href="https://en.wikipedia.org/wiki/Cooperative_bargaining#Nash_bargaining_solution"
    target="_blank"
    rel="noopener noreferrer"
  >
    Nash product
  </a>, after John Nash who used a similar formula in deriving his solution to bargaining games.</p>
    <p>For any readers with background in ethics and its paradoxical mode of investigation, note that children, 
      unborn generations, animals, and even abstract notions, such as “nature” or “cultural heritage”, can also be 
      accommodated in the above analytical framework, as members in need of power in the form of rights protection.</p>
    <p>Looking at the above math, you might be tempted to think that its purpose is to somehow automate the decision-making process.
      Feed in a computer with the mathematical model and all the appropriate data and, voilà, you have yourself a machine spewing out rational policies for society.
    </p>
    <p>In practice, there are three major stumbling blocks to realising such a <highlight>Black Mirror scenario</highlight>:</p> 
    <p>First, as in the case of utility, <highlight>agreeing on an actual numeric measure of power can be rather tricky</highlight>.
      In physics, power is measured in watts, but in social sciences, it is not clear what an equivalent unit could be.
    </p>
    <p>Second, even if we agree on an appropriate measure of power, <highlight>the amount of information that would need to be collected 
      and processed</highlight> to estimate all the required mathematical relations and parameters is <highlight>humongous</highlight>.</p>
    <p>Third and last, the math that represents best how the various determinants of individual power interact is that of{" "}
  <a
    href="https://en.wikipedia.org/wiki/Dynamical_system#Nonlinear_dynamical_systems_and_chaos"
    target="_blank"
    rel="noopener noreferrer"
  >
    non-linear differential equations
  </a>{" "} characteristic of{" "}
  <a
    href="https://en.wikipedia.org/wiki/Complex_adaptive_system"
    target="_blank"
    rel="noopener noreferrer"
  >
    complex adaptive systems
  </a>. As a rule, these equations are <highlight>not solvable in closed form, cannot be used for predictions, 
    and they don't have parameters susceptible to statistical estimation</highlight>.</p>
  <p>Here, as in most theoretical social science that uses such models, the math is a great tool of communicating ideas.
      It makes the maining of certain concepts and relationships considerably more precise and robust. But it is useless 
      when seen literally as a numeric tool for social engineering.</p>
  <p>The impossibility of the underlying math implies that social optimum cannot be determined by a benovelent dictator 
    aided by a supercomputer or a department of the state. Instead, it substantiates the need for <highlight>a deliberative process of
    democratic decision-making</highlight>, where the decisions are made at the appropriate level of governance, taking into account 
    the dynamic local context. 
        </p>
  <p>To illustrate how the above formulation compares to alternatives, popular in welfare economics and political philosophy 
    (simple utilitarian sum and the John Rawls Maximin formula), check out next a simplified game of wealth distribution.</p>  
    <button onClick={() => setScene("component:SocialWelfareGame")}>Next</button>
    <button onClick={() => setScene("UtilitarianismCompared")}>Back</button>
    <button onClick={() => setScene("PowerPrinciple")}>Way back</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("component:Summary")}>Jump to super-short version</button>
      </div>
  </div>
  );
}
