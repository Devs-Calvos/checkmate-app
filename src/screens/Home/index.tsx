import logoImg from '@assets/logo.png'
import { AddButton } from '@components/NativeBaseComponents/HomeScreenComponents/addButton'
import { AddTaskInput } from '@components/NativeBaseComponents/HomeScreenComponents/addTaskInput'
import DefaultAlert, { AlertHandles } from '@components/NativeBaseComponents/HomeScreenComponents/defaultAlert'
import { Info } from '@components/NativeBaseComponents/HomeScreenComponents/info'
import { Tasks } from '@components/NativeBaseComponents/HomeScreenComponents/tasks'
import { NoHaveTasks } from '@components/NoHaveTasks'
import { useTheme, VStack, Image, HStack, FlatList } from 'native-base'
import { useState, useMemo, useRef } from 'react'
import { tasksDTO } from 'src/@types/dto/tasksDTO'

export function Home() {
  const [tasks, setTasks] = useState<tasksDTO[]>([])
  const [newDescriptionTask, setNewDescriptionTask] = useState<string>('')

  const { colors, sizes } = useTheme()

  const openAlertRef = useRef<AlertHandles>(null)

  function handleAddNewTask(description: string) {
    if (newDescriptionTask.trim().length === 0) {
      openAlertRef.current?.openAlert({
        title: 'Tarefa!',
        status: 'error',
        message: 'Nome da tarefa inválido.'
      })

      return
    }
    try {
      setTasks(
        tasks.concat({
          description,
          id: Math.floor(Math.random() * 10000),
          completed: false
        })
      )

      setNewDescriptionTask('')

      openAlertRef.current?.openAlert({
        title: 'Sucesso!',
        status: 'success',
        message: 'Nova tarefa adicionada.'
      })
    } catch (error) {
      openAlertRef.current?.openAlert({
        title: 'Tarefas!',
        status: 'error',
        message: 'Tarefa inválida'
      })
    }
  }

  function handleRemoveTask(id: number) {
    try {
      setTasks(tasks.filter(task => task.id !== id))
      openAlertRef.current?.openAlert({
        title: 'Tarefas!',
        status: 'success',
        message: 'Tarefa excluída com sucesso.'
      })
    } catch (error) {
      console.error(error)
      openAlertRef.current?.openAlert({
        title: 'Tarefas!',
        status: 'error',
        message: 'Ocorreu um erro ao excluir a tarefa.'
      })
    }
  }

  const handleCompletedTodoTask = (taskID: tasksDTO['id']) => {
    const taskIndex = tasks.findIndex(task => task.id === taskID)

    if (taskIndex < 0) return

    setTasks(tasks =>
      tasks.reduce<tasksDTO[]>((acc, task, index) => {
        if (taskIndex === index) {
          acc.push({
            ...task,
            completed: !task.completed
          })
          return acc
        }

        acc.push(task)
        return acc
      }, [])
    )
  }

  const completedTasksAmount = useMemo(() => {
    return tasks.filter(tasks => tasks.completed).length
  }, [tasks])

  return (
    <VStack flex={1} backgroundColor={colors.gray[600]}>
      <DefaultAlert ref={openAlertRef} />
      <VStack height={173} backgroundColor={colors.gray[700]} alignItems="center" justifyContent="center">
        <Image source={logoImg} alt="Alternate Text" />
      </VStack>
      <HStack marginTop={146} position="absolute" alignSelf="center" alignItems="center">
        <AddTaskInput value={newDescriptionTask} onChangeText={setNewDescriptionTask} />
        <AddButton onPress={() => handleAddNewTask(newDescriptionTask)} />
      </HStack>
      <HStack marginTop={sizes[14]} alignItems="center" justifyContent="space-around">
        <Info count={tasks.length} title="Criadas" />
        <Info type="DONE" count={completedTasksAmount} title="Concluidas" />
      </HStack>
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Tasks
            description={item.description}
            onRemove={() => handleRemoveTask(item.id)}
            isCompleted={item.completed}
            completedTask={() => handleCompletedTodoTask(item.id)}
          />
        )}
        ListEmptyComponent={<NoHaveTasks />}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 15 }}
      />
    </VStack>
  )
}
