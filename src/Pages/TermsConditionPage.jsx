import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';

function TermsConditionPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <div className="container mx-auto py-8 px-4">
                        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Terms and Conditions</h1>
                            <div className="text-gray-700">
                            <p className="mb-4">
                                Welcome to ponnosheba.com! These terms and conditions outline the rules and regulations for the use of our website.
                            </p>
                            <p className="mb-4">
                                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use ponnosheba.com if you do not accept all of the terms and conditions stated on this page.
                            </p>
                            <p className="mb-4">
                                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Cookies</h2>
                            <p className="mb-4">
                                We employ the use of cookies. By using ponnosheba.com's website you consent to the use of cookies in accordance with ponnosheba.com's privacy policy.
                            </p>
                            <h2 className="text-xl font-bold mb-2">License</h2>
                            <p className="mb-4">
                                Unless otherwise stated, ponnosheba.com and/or its licensors own the intellectual property rights for all material on ponnosheba.com. All intellectual property rights are reserved. You may access this from ponnosheba.com for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Hyperlinking to our Content</h2>
                            <p className="mb-4">
                                The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                            </p>
                            <p className="mb-4">
                                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                            </p>
                            <h2 className="text-xl font-bold mb-2">iFrames</h2>
                            <p className="mb-4">
                                Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Content Liability</h2>
                            <p className="mb-4">
                                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Reservation of Rights</h2>
                            <p className="mb-4">
                                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Removal of links from our website</h2>
                            <p className="mb-4">
                                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Changes to Terms and Conditions</h2>
                            <p className="mb-4">
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                            <p className="mb-4">
                                By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the website.
                            </p>
                            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].
                            </p>
                            </div>
                        </div>
                        </div>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default TermsConditionPage;