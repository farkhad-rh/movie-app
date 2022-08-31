import { FC } from 'react'

import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'

import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'

import styles from './AdminTable.module.scss'

interface IAdminTable {
  tableItems: ITableItem[]
  headerItems: string[]
  isLoading: boolean
  removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
  tableItems,
  headerItems,
  isLoading,
  removeHandler,
}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems} />

      {isLoading && <SkeletonLoader count={1} height={48} className='mt-4' />}

      {!isLoading && (
          <>
            {tableItems.length && (
              tableItems.map((tableItem) => (
                <AdminTableItem
                  key={tableItem._id}
                  tableItem={tableItem}
                  removeHandler={removeHandler}
                />
              ))
            )}

            {!tableItems.length && (
              <div className={styles.notFound}>Elements not found</div>
            )}
          </>
      )}
    </div>
  )
}

export default AdminTable
