import css from "./ErrorMessage.module.css"
export default function ErrorMessage() {
  return (
    <>
      <p className={css.error}>OOOPS!!! Something went wrong. Please reload the page.</p>
    </>
  );
}
