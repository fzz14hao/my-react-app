

/**
 * 获取URL的参数
 * 
 * @param null
 * @return {Object} 参数对象
 */
function queryToObj() {
	const res={}
	const search=location.search.substr(1)
	search.split('&').forEach((params)=>{
		const arr=params.split('=')
		const key = arr[0]
		const val = arr[1]
		res[key]=val
	})
	return res
}

export default queryToObj
