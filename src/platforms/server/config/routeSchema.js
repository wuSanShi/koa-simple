
export default {
	name:       {type: 'string', required: true,  default: ''},
	page:       {type: 'string', required: true,  default: '1'},
	limit:      {type: 'number', required: true,  default: '20'},
	keyWord:    {type: 'string', required: false, default: ''},
	id:         {type: 'string', required: true},
	ids:        {type: 'array',  required: true}
};