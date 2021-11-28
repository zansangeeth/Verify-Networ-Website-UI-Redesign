import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

export default function Home(){
    const nav = useHistory();
    return(
        <div>
            <header>
        <svg class="header-svg" viewBox="0 0 1440 578" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M210.172 577L0 482.921V-22H1455V421.871H1065.04L741.427 454.398L210.172 577Z" fill="#F7F7F7" stroke="#FFF3C7"/>
        </svg>
        <div class="container">
            <div class="left"><h1>Sri Lanka's first ever trusted portal to verify digital certificates</h1></div>
            <div class="right">
                <div class="register-box">
                    <h2>Join Us</h2>
                    <p>
                        To begin this journey, tell us what type of account you’d be opening.
                    </p>

                    <div class="button-list">
                        <div class="main-button" onClick = {()=>{
                            nav.push("/indivdual/sign-up")
                        }}>
                            <svg class="user" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.53057 12.2919L19 0.601625L36.4694 12.2919L29.8141 31.1578H8.18589L1.53057 12.2919Z" stroke="#35688D"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9763 19.3766C14.6014 18.8687 15.4493 18.5833 16.3333 18.5833H21.6667C22.5507 18.5833 23.3986 18.8687 24.0237 19.3766C24.6488 19.8845 25 20.5734 25 21.2917V22.375C25 22.6742 24.7015 22.9167 24.3333 22.9167C23.9651 22.9167 23.6667 22.6742 23.6667 22.375V21.2917C23.6667 20.8607 23.456 20.4474 23.0809 20.1426C22.7058 19.8379 22.1971 19.6667 21.6667 19.6667H16.3333C15.8029 19.6667 15.2942 19.8379 14.9191 20.1426C14.544 20.4474 14.3333 20.8607 14.3333 21.2917V22.375C14.3333 22.6742 14.0349 22.9167 13.6667 22.9167C13.2985 22.9167 13 22.6742 13 22.375V21.2917C13 20.5734 13.3512 19.8845 13.9763 19.3766Z" fill="#35688D"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 13.1667C17.8954 13.1667 17 13.8942 17 14.7917C17 15.6891 17.8954 16.4167 19 16.4167C20.1046 16.4167 21 15.6891 21 14.7917C21 13.8942 20.1046 13.1667 19 13.1667ZM15.6667 14.7917C15.6667 13.2959 17.1591 12.0833 19 12.0833C20.841 12.0833 22.3333 13.2959 22.3333 14.7917C22.3333 16.2874 20.841 17.5 19 17.5C17.1591 17.5 15.6667 16.2874 15.6667 14.7917Z" fill="#35688D"/>
                                </svg>

                                <div class="content">
                                    <label>Member</label>
                                    <span>Personal account to manage all you activities</span>
                                </div>

                                <svg class="arrow-svg" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41249 2.32531C7.18468 2.11378 6.81534 2.11378 6.58753 2.32531C6.35973 2.53685 6.35973 2.87981 6.58753 3.09135L9.67505 5.95833H2.91668C2.59451 5.95833 2.33334 6.20084 2.33334 6.5C2.33334 6.79915 2.59451 7.04166 2.91668 7.04166H9.67505L6.58753 9.90865C6.35973 10.1202 6.35973 10.4631 6.58753 10.6747C6.81534 10.8862 7.18468 10.8862 7.41249 10.6747L11.4958 6.88301C11.7236 6.67148 11.7236 6.32852 11.4958 6.11698L7.41249 2.32531Z" fill="#1565D8"/>
                                    </svg>
                        </div>



                        <div class="main-button" onClick = {()=>{
                            nav.push("/organization/sign-up")
                        }}>
                            <svg class="user" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.76441 12.7131L19 0.84979L36.2356 12.7131L29.668 31.8623H8.33203L1.76441 12.7131Z" stroke="#35688D" stroke-width="1.4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 15.6667C13.2985 15.6667 13 15.9278 13 16.25V22.0833C13 22.4055 13.2985 22.6667 13.6667 22.6667H24.3333C24.7015 22.6667 25 22.4055 25 22.0833V16.25C25 15.9278 24.7015 15.6667 24.3333 15.6667H13.6667ZM11.6667 16.25C11.6667 15.2835 12.5621 14.5 13.6667 14.5H24.3333C25.4379 14.5 26.3333 15.2835 26.3333 16.25V22.0833C26.3333 23.0498 25.4379 23.8333 24.3333 23.8333H13.6667C12.5621 23.8333 11.6667 23.0498 11.6667 22.0833V16.25Z" fill="#35688D"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2525 12.6792C16.6275 12.351 17.1362 12.1667 17.6667 12.1667H20.3333C20.8638 12.1667 21.3725 12.351 21.7476 12.6792C22.1226 13.0074 22.3333 13.4525 22.3333 13.9167V23.25C22.3333 23.5722 22.0349 23.8333 21.6667 23.8333C21.2985 23.8333 21 23.5722 21 23.25V13.9167C21 13.762 20.9298 13.6136 20.8047 13.5042C20.6797 13.3948 20.5101 13.3333 20.3333 13.3333H17.6667C17.4899 13.3333 17.3203 13.3948 17.1953 13.5042C17.0702 13.6136 17 13.762 17 13.9167V23.25C17 23.5722 16.7015 23.8333 16.3333 23.8333C15.9651 23.8333 15.6667 23.5722 15.6667 23.25V13.9167C15.6667 13.4525 15.8774 13.0074 16.2525 12.6792Z" fill="#35688D"/>
                                </svg>
                                

                                <div class="content">
                                    <label>Organization</label>
                                    <span>Own or belong to a organization, this is for you.</span>
                                </div>

                                <svg class="arrow-svg" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41249 2.32531C7.18468 2.11378 6.81534 2.11378 6.58753 2.32531C6.35973 2.53685 6.35973 2.87981 6.58753 3.09135L9.67505 5.95833H2.91668C2.59451 5.95833 2.33334 6.20084 2.33334 6.5C2.33334 6.79915 2.59451 7.04166 2.91668 7.04166H9.67505L6.58753 9.90865C6.35973 10.1202 6.35973 10.4631 6.58753 10.6747C6.81534 10.8862 7.18468 10.8862 7.41249 10.6747L11.4958 6.88301C11.7236 6.67148 11.7236 6.32852 11.4958 6.11698L7.41249 2.32531Z" fill="#1565D8"/>
                                </svg>
                        </div>




                    </div>
                </div>
            </div>
        </div>

        
    </header>

    <section class="about-us">

        <div class="container">
        <div class="half"><img src={require('../assets/certific.png').default}/></div>
        <div class="half">
            <h2>Printable Certificate Worth Hanging on the Wall</h2>
            <p>
                Whether you need a digital certificate or the one for print—we have tons of high-quality templates to cover your needs. 
                Now you don’t have to waste a lot of time to create a design from scratch. Just pick a layout, edit text, and download or print. As easy as it sounds.
            </p>
        </div>
        </div>

    </section>

    <section class="awesome">

        <div class="container">
            <h2>All Needed Features for an 
                Awesome Certificate Design</h2>
            <p>Whether you need a digital certificate or the one for print—we have tons of high-quality templates to cover your needs. 
                Now you don’t have to waste a lot of time to create a design from scratch. Just pick a layout, edit text, and download or print. As easy as it sounds.</p>
        </div>
    </section>

    <section class="tips">

        <div class="container">
            <h2>Tips on Making a Certificate</h2>
            <div class="content">
                <div class="half">
                    <p>If you want to print a certificate you’ve made in Crello—nothing stops you! Keep in mind that the printed certificate will look as good as it looks on your computer if printed on quality paper with quality ink.</p>
                    <p>If you want to print a certificate you’ve made in Crello—nothing stops you! Keep in mind that the printed certificate will look as good as it looks on your computer if printed on quality paper with quality ink.</p>
                </div>
                <div class="half">
                    <p>If you want to print a certificate you’ve made in Crello—nothing stops you! Keep in mind that the printed certificate will look as good as it looks on your computer if printed on quality paper with quality ink.</p>
                    <p>If you want to print a certificate you’ve made in Crello—nothing stops you! Keep in mind that the printed certificate will look as good as it looks on your computer if printed on quality paper with quality ink.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="how-to">
        <div class="container">
            <h2>How to Create a Certificate in 4 Easy Steps</h2>


            <div class="step">
                <h2>1</h2>
                <img src={require('../assets/step1.png').default}/>
                <div class="content">
                    <label>Create a Crello Account</label>
                    <p>
                        Create an account and sign in to have all your designs automatically saved. You can come back anytime to edit them or create new designs.
                    </p>
                </div>
            </div>


            <div class="step">

                <div class="content">
                    <label>Create a Crello Account</label>
                    <p>
                        Create an account and sign in to have all your designs automatically saved. You can come back anytime to edit them or create new designs.
                    </p>
                </div>
                
                <img src={require('../assets/step1.png').default}/>
                
                <h2>2</h2>
                
            </div>


            <div class="step">
                <h2>3</h2>
                <img src={require('../assets/step1.png').default}/>
                <div class="content">
                    <label>Create a Crello Account</label>
                    <p>
                        Create an account and sign in to have all your designs automatically saved. You can come back anytime to edit them or create new designs.
                    </p>
                </div>
                
            </div>


            <div class="step">

                <div class="content">
                    <label>Create a Crello Account</label>
                    <p>
                        Create an account and sign in to have all your designs automatically saved. You can come back anytime to edit them or create new designs.
                    </p>
                </div>
                
                <img src={require('../assets/step1.png').default}/>
                
                <h2>4</h2>
                
            </div>




        </div>
    </section>

        </div>
    )
}