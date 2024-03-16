import Corner from "@/assets/corner.svg";
import Burger from "@/assets/icons/burger_menu_icon.svg";
import Lang from "@/assets/lang.svg";
import { locale, translate } from "@/locales";
import styles from "@/styles/NavigationBar.module.scss";
import { Commission } from "@/types/aliases";
import { Schema } from "@/types/schema";
import Link from "next/link";
import { useRouter } from "next/router";

function DropdownMenu({
  head: button,
  children,
  className,
}: {
  head: any;
  children: any;
  className?: string;
}) {
  return (
    <div className={styles.dropdownMenuItem + " " + (className || "")}>
      {button}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default function NavigationBar(props: {
  commissions?: Commission[];
  langs: Schema["languages"];
}) {
  const router = useRouter();
  const entries = [
    <Link className={styles.menuItem} href="/association">
      {translate("association", locale(router), {
        capitalize: true,
        plural: false,
      })}
    </Link>,
    <Link className={styles.menuItem} href="/commissions">
      {translate("commission", locale(router), {
        capitalize: true,
        plural: true,
      })}
    </Link>,
    <Link className={styles.menuItem} href="/news">
      {translate("news", locale(router), {
        capitalize: true,
        plural: false,
      })}
    </Link>,
  ];

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.corner}>
        <Corner />
      </Link>

      <div className={styles.navigationMenu}>
        <Link className={styles.menuItem} href="/association">
          {translate("association", locale(router), {
            capitalize: true,
            plural: false,
          })}
        </Link>

        {props.commissions ? (
          <DropdownMenu
            head={
              <Link className={styles.menuItem} href="/commissions">
                {translate("commission", locale(router), {
                  capitalize: true,
                  plural: true,
                })}
                <i className={styles.arrow} />
              </Link>
            }
          >
            {props.commissions ? (
              props.commissions.map((c) => {
                if (c.name && c.slug) {
                  return (
                    <Link
                      key={c.slug}
                      href={`/commissions/${c.slug}`}
                      className={styles.menuItem}
                    >
                      {c.name}
                    </Link>
                  );
                } else {
                  console.error(
                    `Missing \`name\` or \`slug\` in commission: ${JSON.stringify(
                      c
                    )}`
                  );
                  throw new Error("Invalid commission");
                }
              })
            ) : (
              <></>
            )}
          </DropdownMenu>
        ) : (
          <Link className={styles.menuItem} href="/commissions">
            {translate("commission", locale(router), {
              capitalize: true,
              plural: true,
            })}
          </Link>
        )}

        <Link className={styles.menuItem} href="/news">
          {translate("news", locale(router), {
            capitalize: true,
            plural: false,
          })}
        </Link>

        {props.langs ? (
          <DropdownMenu
            head={<Lang className={styles.lang + " " + styles.dropdownHead} />}
          >
            {props.langs.map((l) => (
              <div
                key={l.code}
                className={styles.menuItem}
                onClick={() =>
                  router.push(router.asPath, undefined, { locale: l.code })
                }
              >
                {l.name}
              </div>
            ))}
          </DropdownMenu>
        ) : (
          <></>
        )}

        <DropdownMenu
          head={
            <Burger className={styles.burger + " " + styles.dropdownHead} />
          }
          className={styles.burgerContainer}
        >
          {entries}
        </DropdownMenu>
      </div>
    </div>
  );
}
