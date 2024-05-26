import users from '../db/data.json';

export const Acacs = () => {
  return (
    <div className='acacs'>
        <div className='gestion'>
            <textarea rows={15}></textarea>

            <div className='cps'>
                <div className='separation'>
                    <input type="text" style={{width: '70px'}}/>
                </div>
                <div className='separation'>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" style={{width: '38px'}} />
                </div>
                <div className='separation'>
                    <input type="text" style={ {width: '45px', margin: '0 20px'} }/>
                    <input type="text" style={ {width: '55px'}} />
                </div>
                <div className='separation'>
                    <input type="text" />
                </div>
            </div>
        </div>
        <div className='search-account'>
            <form className='input-box'>
                <input type="text" maxLength={16}/>
                <input type="submit" value="Go" />
            </form>
        </div>
    </div>
  )
}
