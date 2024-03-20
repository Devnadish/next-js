import { BurgerMenu } from './BurgerMenu'
export const NavBar = () => {
  return (
    <nav className='   fixed left-0  top-0 flex h-[50px] w-screen items-center justify-between bg-secondary/70 shadow-xl  '>
      <div className='mr-2 lg:hidden'>
        <BurgerMenu />
      </div>
      <div className='hidden w-full items-center justify-between lg:flex'>
        <div className='flex h-full w-1/4 items-center justify-center border-x border-border'>
          login
        </div>
        <div className='flex h-full w-1/2 items-center justify-center border-x border-border'>
          menu
        </div>
        <div className='flex h-full w-1/4 items-center justify-center border-x border-border'>
          logo
        </div>
      </div>
      
    </nav>
  )
}
