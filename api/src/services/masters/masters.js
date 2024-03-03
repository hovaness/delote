import { db } from 'src/lib/db'

export const masters = () => {
  return db.master.findMany()
}

export const master = ({ id }) => {
  return db.master.findUnique({
    where: { id },
  })
}

export const createMaster = ({ input }) => {
  return db.master.create({
    data: input,
  })
}

export const updateMaster = ({ id, input }) => {
  return db.master.update({
    data: input,
    where: { id },
  })
}

export const deleteMaster = ({ id }) => {
  return db.master.delete({
    where: { id },
  })
}

export const Master = {
  specialization: (_obj, { root }) => {
    return db.master.findUnique({ where: { id: root?.id } }).specialization()
  },
}
