import Icon from '../Icon/Icon'

const SlideInPanel = ({ children, handleClose }) => {
  return (
    <div className="inset-0 h-screen w-full overflow-y-scroll bg-spanishGreen px-[145px] pt-[100px] dark:bg-blueZodiac">
      <button
        onClick={handleClose}
        className="absolute right-6 top-6 text-black dark:text-silverLakeBlue"
      >
        <Icon id="close" size={64} />
      </button>
      {children}
    </div>
  )
}

export default SlideInPanel
