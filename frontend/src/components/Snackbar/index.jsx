import style from './Snackbar.module.css'
import blockIcon from '../../assets/block-icon.png'
import closeIcon from '../../assets/close-icon.png'

export function Snackbar({ message, showSnackbarError, setShowSnackbarError, type = 'error' }) {
  return <div className={`${style.snackbar} ${style[type]} ${showSnackbarError ? "" : style.snackbarHide}`}>
  <div className={style.snackbarContent}>
    <img src={blockIcon} />
    <p className='fs-paragraph-1'>{message}</p>
  </div>
  <div className={style.snackbarClose} onClick={() => {setShowSnackbarError(false)}}>
    <img src={closeIcon} />
  </div>
</div>
}