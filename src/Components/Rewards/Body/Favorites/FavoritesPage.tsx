import React from "react";

interface Props {
  source: string;
  title?: string;
  children?: string;
}

const FavoritesPage: React.FC<Props> = ({ source, title, children }) => {
  return (
    <div className="absolute inset-0 md:top-12">
      <div className="md:flex">
        <div className="md:flex md:ml-20 md:flex-1">
          <img
            src={source}
            className="mx-auto text-center max-h-56 md:flex"
            alt="coffee material"
          />
        </div>

        {(title || children) && (
          <dl className="p-5 mt-3 space-y-5 text-center place-items-start md:place-self-center md:flex-1 md:text-left md:flex md:flex-col">
            {title && (
              <dt className="text-xl font-medium smMd:text-2xl">{title}</dt>
            )}
            {children && <dd className="text-sm md:text-base">{children}</dd>}
          </dl>
        )}
      </div>
    </div>
  );
};

FavoritesPage.defaultProps = {};

export default React.memo(FavoritesPage);
