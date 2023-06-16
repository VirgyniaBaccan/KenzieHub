export const Dashboard = ({userInfos}) => {
    console.log(userInfos)
    return (
        <div>
            <p>Funcionando</p>
            <h2>{userInfos.name}</h2>
            <h3>{userInfos.course_module}</h3>
        </div>
    )
}