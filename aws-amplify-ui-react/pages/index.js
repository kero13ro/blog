// import Head from 'next/head'
import { useEffect, useState } from "react"
import { Button, SelectField } from "@aws-amplify/ui-react"
import { API } from "aws-amplify"
import { listPosts } from "./../src/graphql/queries"

export default function Home() {
  const [postList, setPostList] = useState([])

  async function fetchPost() {
    const { data } = await API.graphql({
      query: listPosts
    })

    setPostList(data.listPosts.items)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      <Button variation="primary">1222223</Button>
      {postList.map(el => <div key={el.id}>{el.content}</div>)}
      {/* <SelectField label={"select"}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </SelectField> */}
    </div>
  )
}
