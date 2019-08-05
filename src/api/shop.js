import http from "@utils/http.js"
//书籍列表
export const shopList = ()=>http.get("/app/mock/222092/books/pageList")
export const shop = ()=>http.get("http://localhost:4000/secdetail")