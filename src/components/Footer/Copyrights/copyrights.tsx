import { t } from 'i18next'
import { logoDark } from '@/assets'
import { Logo } from '@/components'
import styles from './copyrights.module.css'

export const Copyrights: React.FC = () => {
	return (
		<div className={styles.copyrights}>
			<Logo src={logoDark} alt={t('logo.alt')} className={styles.copyLogo} />
			<p>{t('copyright.text')}</p>
		</div>
	)
}
