import axios from 'axios'

const appKey = 'vtexappkey-braehaircare-VUMYGB'
const appToken =
	'MRTDJMGLKAOUYRHZBFVBTYPSSHWFFCGHZYGNRIPQVOGVEEEAFYKKXGNOCBKCPBGIUHVZKTITQFFFRTOOCWAGRWKSLSLQXMAUHYAXJFPLQQURBHWINWATAZQYWCOSISVD'

const api = axios.create({
	baseURL: 'https://braehaircare.myvtex.com/api',
	headers: {
		accept: 'application/vnd.vtex.ds.v10+json',
		'Content-Type': 'application/json',
		'x-vtex-api-appkey': appKey,
		'x-vtex-api-apptoken': appToken
	}
})

export default api
