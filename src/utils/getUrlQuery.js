

/**
 * 获取URL的参数
 * 
 * @param {String} name 要获取的参数
 * @return null
 */
function getUrlQuery(name) {
	const search=location.search.substr(1)
	const reg=new RegExp(`(^|&)${name}=([^&*])`,'i')
	const res=search.match(reg)
	if(res===null){
		return null
	}
	return res[2]
}

export default getUrlQuery
