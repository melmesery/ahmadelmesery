export default function Toggler({ toggle, menuToggle }: any) {
    return (
        <>
            <div className="menu-icon p-0">
                <input className="menu-icon__cheeckbox" type="checkbox" checked={toggle} onChange={menuToggle} />
                <div>
                    <span className="bg-[#013240] dark:bg-[#EFF0F2]" />
                    <span className="bg-[#013240] dark:bg-[#EFF0F2]" />
                </div>
            </div>
        </>

    )
}
