import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

/*this is how we can create the element using root react and at the end
every element which are created by react is considered as a js object.

const heading = React.createElement("div", {}, [
  React.createElement("div", { id: "heading section" }, [
    React.createElement("h1", {}, "Hello h!!"),
    React.createElement("h2", {}, "Hello !!"),
  ]),
  React.createElement("div", { id: "heading section" }, [
    React.createElement("h1", {}, "Hello h2 !!"),
    React.createElement("h2", {}, "Hello !!"),
  ]),
]);
*/

/*now we can create the element using JSX also
NOTE:- JSX is a type of syntax which looks like a html syntax but it is not a that.
JSX is a way to creating a react elements.
And converting jsx to react element is done by a bable package.

FLOW:- JSX element => react.createElement=> react Object()=> HTML element(render)
*/
const heading = <h1>this is jsx heading✨</h1>;

/*
Functional Components:- A normal javascript function which can return the element is basically called as a functional components.
it can be called using <componentName/>  or using {JS function invoke}.
and we can write the normal javascript syntax in the functional components using {}.
It is imporatant to start the name of functional components by capital letter.
*/

const SampleFunctionalComp = function () {
  return (
    <div>
      {heading}
      this is crated using functional component
    </div>
  );
};

//using arrow functions
const CompositionFunComp = () => (
  <div id="parent ">
    <h1>
      calling another functional component into this parent functional component
    </h1>
    <SampleFunctionalComp />
    {SampleFunctionalComp()}
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(<CompositionFunComp />);
