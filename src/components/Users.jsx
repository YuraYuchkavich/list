import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"
import { 
  Wrapper, 
  User,
  Pagination,
  Page
} from './Users.styles'

const Users = (props) => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState('1')
  const [totalPage, setTotalPage] = useState([])

  useEffect(() => {
    getUsers(page)
  }, [setUsers])

  const getUsers = useCallback(async (page) => {
    let response
    try {
      response = await axios.get(`https://reqres.in/api/users?page={${page}}`)
      debugger
      setUsers(response.data.data)
      let pages = Array(response.data.total_pages).fill(1).map((el,i)=>el+i)
      setTotalPage(pages)
      debugger
    } catch (error) {
      console.error(error);
    }
  }, [setPage])

  const changePage = useCallback((value) => {
    setPage(value.currentTarget.outerText)
    getUsers(value.currentTarget.outerText)
  }, [setPage])

  return (
    <Wrapper>
        {
        users.map(el => (
            <NavLink to={'/profile/user/'+el.id}>
            <User
              {...el}
            >
              {`${el.first_name} ${el.last_name}`}
            </User>
            </NavLink>
            )
        )
        }
        <Pagination>
        {
        totalPage.map(el => (
              <Page
                onClick={changePage}
              >
              {el}
              </Page>
            )
        )
        }
        </Pagination>

    </Wrapper>
  )
}

export default Users
