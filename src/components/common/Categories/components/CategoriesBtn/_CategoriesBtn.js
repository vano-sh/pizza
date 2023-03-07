export const CategoriesBtn = ({ className, children }) => {
  return (
    <div className={`${className}__btn`}>
      <p className={`${className}__text`}>{children}</p>
    </div>
  )
}
