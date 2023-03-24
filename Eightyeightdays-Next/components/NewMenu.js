import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/NewMenu.module.css"

export default function NewMenu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>An Eye For An Eye</div>
                <div className={styles.submenu}>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Indecent Exposures</div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>To Succeed</div>
                        <div className={styles.arrow}>&#10140;</div>
                        <div className={styles.submenu_2}>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>As Seen Through Windows</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>What Though</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Blood From A Stone</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Bloodroot</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Pattern Recognition</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Photosynthesis</div>
                        <div className={styles.arrow}>&#10140;</div>
                        <div className={styles.submenu_2}>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Carbon Transfer Printing</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Collotype</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>X-Type / Woodburytype</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>P4</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>The Acetype Process</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Fibrotypes</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>The Lumen Reversal Process</div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>On Photography</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.submenu_item}>
                        <div className={styles.submenu_item_title}>Illustrious</div>
                        <div className={styles.arrow}>&#10140;</div>
                        <div className={styles.submenu_2}>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Domestication</div>
                                <div className={styles.arrow}>&#10140;</div>
                                <div className={styles.submenu_3}>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Fleurs à l'intérieur</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Reluctant Sculptures</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>On The Verge Of Civilisation</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>State Of Play</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Save My Skin</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Monumental</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Pattern Recognition</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>The Shape Of Things To Come</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>The Path Of Least Resistance</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Catastrophe & The Curator</div>
                                <div className={styles.arrow}>&#10140;</div>
                                <div className={styles.submenu_3}>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Unintentional Pet Photos</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Through The Lens</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Shot</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Gorilla Glue</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Incorporated</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Proceeds</div>
                                <div className={styles.arrow}>&#10140;</div>
                                <div className={styles.submenu_3}>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Painting-Realistic Photography</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Roots/Routes</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Iterative Printing</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.submenu_2_item}>
                                <div className={styles.submenu_2_item_title}>Others</div>
                                <div className={styles.arrow}>&#10140;</div>
                                <div className={`${styles.submenu_3_a} + ${styles.submenu_3}`}>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>The Outsiders</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>Context Conflicts</div>
                                    </div>
                                    <div className={styles.submenu_3_item}>
                                        <div className={styles.submenu_3_item_title}>The Heedful Horseman</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Pars Pro Toto</div>
            </div>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Human Writes</div>
            </div>
            <div className={styles.menu_item}>
                <div className={styles.menu_item_title}>Non Martial Arts</div>
            </div>
        </div>
    )
}