
class Koala extends React.Component {
  render() {
    return (
      React.createElement(Box, null));

  }}


class Box extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "box" },
      React.createElement(EarLeft, null),
      React.createElement(EarRight, null),
      React.createElement(EyeLeft, null),
      React.createElement(EyeRight, null),
      React.createElement(Head, null),
      React.createElement(Nose, null),
      React.createElement(HairLeft, null),
      React.createElement(HairRight, null),

      React.createElement(Saying, null)));



  }}


class EarLeft extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(OuterEarLeft, null),
      React.createElement(InnerEarLeft, null)));


  }}


class EarRight extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(OuterEarRight, null),
      React.createElement(InnerEarRight, null)));


  }}


class EyeLeft extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(OuterEyeLeft, null),
      React.createElement(PupilLeft, null)));


  }}

class EyeRight extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(OuterEyeRight, null),
      React.createElement(PupilRight, null)));


  }}


class Head extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "head" }));

  }}


class Nose extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "nose" }));

  }}


class HairLeft extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "hair-left" }));

  }}


class HairRight extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "hair-right" }));

  }}


class OuterEarRight extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "outer-ear-right" }));

  }}


class InnerEarRight extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "inner-ear-right" }));

  }}


class OuterEarLeft extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "outer-ear-left" }));

  }}


class InnerEarLeft extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "inner-ear-left" }));

  }}


class OuterEyeLeft extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "outer-eye-left" }));

  }}


class PupilLeft extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "pupil-left" }));

  }}


class OuterEyeRight extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "outer-eye-right" }));

  }}


class PupilRight extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "pupil-right" }));

  }}


class Saying extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "saying" },
      React.createElement("h4", null, "\"In this world that we live in, a koala is all you need. I need one too,\" says the Koala, in despair.")));


  }}


ReactDOM.render(
React.createElement(Koala, null),
document.getElementById('koala'));
