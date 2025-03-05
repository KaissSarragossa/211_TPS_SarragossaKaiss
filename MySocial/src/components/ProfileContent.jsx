import './profilecontent.css'

function ProfileContent(prop) {
  return (
    <>
        <div class="profile">
            <div class="profile-name-image">
                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                <h1 class="profile-user-name">Jane Doe</h1>
            </div>
            <div class="profile-bio">
                <p>{prop.bio}</p>
            </div>
            <div class="profile-stats">
                <ul>
                    <li>{prop.post} post</li>
                    <li>{prop.followers} followers</li>
                    <li>{prop.following} following</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProfileContent