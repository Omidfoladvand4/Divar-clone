const getPost = (id , data) => {
  const postId = Number(id);
    const foundPost = data.find((ad) => ad.id === postId);
    return foundPost
}


export default getPost
