import http from "@utils/http.js"
//书籍列表
export const shopList = ()=>http.get("/app/mock/222092/books/pageList")