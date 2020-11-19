const url = `http://localhost:3001/`

class UserModel {
  static create(newUser) {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error creating data', err)
      return {message: 'Error creating data'}
    })
  }

  static getOne(id)
}

export default UserModel;