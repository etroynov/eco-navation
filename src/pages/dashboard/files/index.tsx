import * as React from 'react';
import Link from 'next/link';

const Files = () => (
    <div>
        <h1>Медиатека</h1>
        <Link href="/dashboard/files/upload"><a>Добавить новый</a></Link>
    </div>
);

export default Files;
